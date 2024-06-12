import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./Products.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./cartSlice";

const Products = () => {
  //Delcared dispatch that will allow me to make changes to what products are added into the shopping cart.
  const dispatch = useDispatch();
  //Created an array objects that contains all the different information about the products within the webpage. Each with a price, image, title, description and a specific id.
  const products = [
    {
      id: 1,
      title: "Red Bull Green SPECT",
      description: "Classic green frame, tinted with dynamic orange lens",
      image:
        "https://glisshop-glisshop-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/d7d3fe1c940592d7e96dd7eefb6cdf84722114e3_E23REDBLUN379826_REDB0727708_0.jpeg",
      price: 1650.0,
    },
    {
      id: 2,
      title: "Red Bull Shield blue SPECT",
      description: "Exciting shield cycling frames, created for a true athlete",
      image:
        "https://www.precisionski.fr/100890-large_default/red-bull-dash-matt-black-sunglasses.jpg",
      price: 2000.0,
    },
    {
      id: 3,
      title: "Red Bull Shield black SPECT",
      description: "Exciting shield cycling frames, created for a true athlete",
      image:
        "https://www.bfgcdn.com/1500_1500_90/205-3618-0211/red-bull-spect-dakota-cat-3-vlt-16-cycling-glasses.jpg",
      price: 2000.0,
    },
    {
      id: 4,
      title: "Red Bull Clear SPECT",
      description: "Clear frame, designed to tackle any task at hand",
      image:
        "https://static.privatesportshop.com/img/p/3046902-9303489-thickbox.jpg",
      price: 1650.0,
    },
    {
      id: 5,
      title: "Red Bull Rounded SPECT",
      description: "Dynamic shape, created to protect with style",
      image:
        "https://www.stadionshop.com/media/catalog/product/cache/61f82b9c716a2869aa27bf290bb56a69/4/4/44313_red_bull_spect_tain-002_son_na_o_ala_1.jpg",
      price: 1800.0,
    },
    {
      id: 6,
      title: "Red Bull Wing SPECT",
      description: "Perfect all rounder, designed for sports and lifestyle",
      image:
        "https://www.exisport.eu/202869-thickbox_default/exisport-sunglasses-red-bull-spect-wing-blade-001p-shiny-black-brown-cat3-56-16-140.jpg",
      price: 2400.0,
    },
    {
      id: 7,
      title: "Red bull Flying bull SPECT",
      description: "Classic aviator design, for pilots who dare",
      image: "https://www.brillenhaus-shop.at/images/756-756-15388.png",
      price: 2400.0,
    },
    {
      id: 8,
      title: "Red Bull Flying bull SPECT",
      description: "Classic brown aviator, for pilots who dare",
      image:
        "https://specteyewear.com/a/l/en/cdn/shop/products/RBSE_website_corsair-003_front_1000x800px_1200x1200.jpg?v=1661408854",
      price: 2400.0,
    },
    {
      id: 9,
      title: "Red Bull Lifestyle SPECT",
      description: "Lightweight design, just right for a fashion boost",
      image:
        "https://glisshop-glisshop-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/735/735/a6beb4bef9df2a8f7dfa67228d34409eab1a62af_E23REDBLUN379824_REDB0727702_0.jpeg",
      price: 1800.0,
    },
    {
      id: 10,
      title: "Red Bull Ski Goggles",
      description:
        "Intense contrasts, brilliant colours and razor-sharp vision",
      image: "https://m.media-amazon.com/images/I/71PvpU0qhfL.jpg",
      price: 3500.0,
    },
    {
      id: 11,
      title: "Red Bull Ski Goggles",
      description: "Intense contract, brilliant colours and razor-sharp vision",
      image:
        "https://images1.sportpursuit.info/media/catalog/product/cache/1/image/800x800/040ec09b1e35df139433887a97daa66f/R/e/RedBullSpect_Apr20-Barrier_006_RZ.webp",
      price: 3500.0,
    },
    {
      id: 12,
      title: "Red Bull Shield SPECT",
      description: "Mono Shield, ideal for all sports",
      image:
        "https://specteyewear.com/cdn/shop/products/RBSE_website_daft-005_3_1000x800px_1200x1200.jpg?v=1648050128",
      price: 2000.0,
    },
  ];

  //initialising an action to take place and update the state of what items are added into the shopping cart component.
  const addtoCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container className="productContainer">
        <Row>
          {/*Used .map on the objects products, this iterates over all the products and applies a card to each product with the styles coded below. */}
          {products.map((products) => (
            <Col key={products.id}>
              <Card
                style={{
                  width: "16rem",
                  height: "35rem",
                  margin: "1em",
                  padding: "2em",
                  border: "1px solid rgb(173, 6, 6)",
                }}
              >
                {/*passed the attribute from the products for title and image to be displayed within the card. */}
                <Card.Title
                  style={{
                    color: "rgb(5, 33, 82)",
                    textDecoration: "underline",
                  }}
                >
                  {products.title}
                </Card.Title>
                <Card.Img
                  className="productImg"
                  variant="top"
                  src={products.image}
                />
                <Card.Body>
                  <Card.Text>{products.description}</Card.Text>
                  <Card.Text>R{products.price}</Card.Text>
                  {/*Used the function below that allows the user to click the button and add that specific product to there given shopping cart. */}
                  <button
                    onClick={() => addtoCart(products)}
                    className="addtoCart"
                  >
                    Add to cart
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
