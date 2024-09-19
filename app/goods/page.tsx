import ProductCard from '@/components/template/ProductCard';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">茶叶专区</h1>
      <ProductCard
        productName="茶叶(250g/盒)"
        productPrice={40}
        stockQuantity={25}
        imageUrl="https://static.cop.jingheyijia.com/upload/202409101642612.png"
      />
    </div>
  );
};

export default HomePage;