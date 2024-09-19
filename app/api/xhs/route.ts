import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import crypto from 'crypto';






export async function GET(request: NextRequest) {

    const a = request.nextUrl.searchParams.getAll('id') ;
    console.log(a)

    let data = {
        "app_key": 'red.FgYMqWaPOojxkp1h',
        "nonce": Date.now().toString(),
        "timestamp": Date.now().toString(),
    }
    //第一次加密
    let signature = generateSignature('d2659f85c35052aa84cf7d9caaa829ef', {
        appKey: data.app_key,
        nonce: data.nonce,
        timeStamp: data.timestamp,
    })

    let res = await axios('https://edith.xiaohongshu.com/api/sns/v1/ext/access/token', {
        method: 'POST',
        data: {
            ...data,
            signature
        },
    })

    //第二次加密
    let str = generateSignature(res.data.data.access_token, {
        appKey: data.app_key,
        nonce: data.nonce,
        timeStamp: data.timestamp,
    })


    return NextResponse.json({ ...data, signature: str, appKey: data.app_key });
}

function generateSignature(secretKey, params) {
    // Step 1: Sort parameters by key
    const sortedParams = Object.keys(params)
        .sort() // JavaScript对象的键是字符串，排序后自动按字典顺序排序
        .reduce((result, key) => {
            result[key] = params[key];
            return result;
        }, {});

    // Step 2: Concatenate sorted parameters
    const paramsString = Object.entries(sortedParams)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

    // Step 3: Add secret key to the parameter string

    let dataToSign = paramsString + secretKey;
    // Step 4: Calculate signature using SHA-256
    return crypto.createHash('sha256').update(dataToSign, 'utf8').digest('hex');
}


