import './CartOnePage.css';

interface CartOnePageProps {
  handleClose: () => void;
}

function CartsOnePage({ handleClose }: CartOnePageProps) {
  return (
    <section className="section-cartsonepage">
      <div className="cartsonepage_container" onClick={handleClose}>
        {
          //currentBeers.map((i) => (
          <div className="cartsonepage_cart">
            <img className="cartsonepage_cart_img" src="" alt=""></img>
            <p className="cartsonepage_cart_title">{/*i.name*/}</p>
          </div>
          // ))
        }
      </div>
    </section>
  );
}
export default CartsOnePage;
