export default function Carousel() {
  return (
    <div>
      <div className="carousel w-full h-[360px] rounded-2xl">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
          <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex items-center gap-x-3">
            <span className="w-4 h-4 rounded-full bg-gray-500 border-gray-700 flex items-center justify-center"></span>
            <span className="w-4 h-4 rounded-full bg-gray-500 border-gray-700 flex items-center justify-center"></span>
            <span className="w-4 h-4 rounded-full bg-gray-500 border-gray-700 flex items-center justify-center"></span>
            <span className="w-4 h-4 rounded-full bg-gray-500 border-gray-700 flex items-center justify-center"></span>
            <span className="w-4 h-4 rounded-full bg-gray-500 border-gray-700 flex items-center justify-center"></span>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
