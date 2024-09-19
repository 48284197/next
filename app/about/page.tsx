'use client'
import CenterNav from '@/components/nav/centerNav'

export default function Example() {


  return (
    <div className="bg-white min-h-screen">
      <CenterNav></CenterNav>

      <div className="relative isolate px-6 pt-14 lg:px-8 " >
        <div
          aria-hidden="true"
          className="absolute w-full h-full  -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div

            className="gradient relative aspect-[1155/678]   opacity-80 w-full h-full overflow-hidden"
          />
        </div>
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
              欢迎来到XUXIWEII的博客
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              快点开始你的探索之旅吧
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/dashboard"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                开始探索
              </a>
             
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >

        </div>
      </div>
    </div>
  )
}
