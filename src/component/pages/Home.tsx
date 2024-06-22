import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardImg,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

const items = [
  {
    src: "/img/bougie1.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "/img/bougie2.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "/img/bougie3.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
  {
    src: "/img/bougie4.jpg",
    altText: "Slide 4",
    caption: "Slide 4",
    key: 4,
  },
  {
    src: "/img/bougie5.jpg",
    altText: "Slide 5",
    caption: "Slide 5",
    key: 5,
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ width: "100%", height: 400 }}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="">
        <div
          className="d-flex justify-content-between"
          style={{ marginTop: 80 }}
        >
          <div
            className=""
            style={{
              marginLeft: "10%",
              backgroundColor: "#F5CBA7",
              borderRadius: 60,
              width: 550,
            }}
          >
            <p
              style={{
                width: 500,
                color: "#3738A2",
                textAlign: "justify",
                paddingTop: 50,
                paddingLeft: 40,
                fontSize: 16,
              }}
            >
              <span style={{ fontSize: 26 }}>NOUS SOMMES </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              aliquam fugit corporis quia cumque voluptatem commodi facilis
              praesentium nemo! Reprehenderit repellat voluptatibus, ipsam sint
              iusto incidunt consectetur officiis! Nihil, corrupti. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Accusamus veritatis
              error rem fugiat sit, autem voluptatum dolor eius repudiandae
              assumenda itaque deserunt, distinctio alias perferendis! Illo
              laboriosam voluptatem eius autem. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Suscipit, sed ullam quidem rerum
              accusamus reiciendis ratione. Repudiandae molestias ex
              necessitatibus provident distinctio maxime, repellendus in
              officia? Illo ad accusantium sint?
            </p>
          </div>
          <img
            src="/img/1.jpg"
            alt="."
            width={500}
            height={400}
            style={{ marginRight: "10%", borderRadius: 50 }}
          />
        </div>
        <br />
        <br />
        <h2 style={{ color: "#3738A2", textAlign: "center" }}>NOS PRODUITS</h2>
        <br />
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: 20, marginRight: 20, marginBottom: 50 }}
        >
          <Card style={{ width: 300 }}>
            <CardImg src="/img/image1.png" alt="." width={100} />
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                excepturi veniam.
              </p>
              <ButtonGroup>
                <Card
                  style={{ borderRadius: 40, width: 90, textAlign: "center" }}
                >
                  PRIX 50DT
                </Card>
                <Button
                  style={{
                    backgroundColor: "#3738A2",
                    color: "#F5CBA7",
                    marginLeft: 10,
                    border: 0,
                  }}
                >
                  Ajouter au panier
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card style={{ width: 300 }}>
            <CardImg src="/img/image1.png" alt="." width={100} />
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                excepturi veniam.
              </p>
              <ButtonGroup>
                <Button style={{ borderRadius: 50 }}>PRIX 50DT</Button>
                <Button
                  style={{
                    backgroundColor: "#3738A2",
                    color: "#F5CBA7",
                    marginLeft: 10,
                    border: 0,
                  }}
                >
                  Ajouter au panier
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card style={{ width: 300 }}>
            <CardImg src="/img/image1.png" alt="." width={100} />
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                excepturi veniam.
              </p>
              <ButtonGroup>
                <Button style={{ borderRadius: 50 }}>PRIX 50DT</Button>
                <Button
                  style={{
                    backgroundColor: "#3738A2",
                    color: "#F5CBA7",
                    marginLeft: 10,
                    border: 0,
                  }}
                >
                  Ajouter au panier
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card style={{ width: 300 }}>
            <CardImg src="/img/image1.png" alt="." width={100} />
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                excepturi veniam.
              </p>
              <ButtonGroup>
                <Button style={{ borderRadius: 50 }}>PRIX 50DT</Button>
                <Button
                  style={{
                    backgroundColor: "#3738A2",
                    color: "#F5CBA7",
                    marginLeft: 10,
                    border: 0,
                  }}
                >
                  Ajouter au panier
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </div>
        <br />
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: 20, marginRight: 20, marginBottom: 50 }}
        >
          <Card style={{ width: 300 }}>
            <CardImg src="/img/image1.png" alt="." width={100} />
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                excepturi veniam.
              </p>
              <ButtonGroup>
                <Card
                  style={{ borderRadius: 40, width: 90, textAlign: "center" }}
                >
                  PRIX 50DT
                </Card>
                <Button
                  style={{
                    backgroundColor: "#3738A2",
                    color: "#F5CBA7",
                    marginLeft: 10,
                    border: 0,
                  }}
                >
                  Ajouter au panier
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card style={{ width: 300 }}>
            <CardImg src="/img/image1.png" alt="." width={100} />
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                excepturi veniam.
              </p>
              <ButtonGroup>
                <Button style={{ borderRadius: 50 }}>PRIX 50DT</Button>
                <Button
                  style={{
                    backgroundColor: "#3738A2",
                    color: "#F5CBA7",
                    marginLeft: 10,
                    border: 0,
                  }}
                >
                  Ajouter au panier
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card style={{ width: 300 }}>
            <CardImg src="/img/image1.png" alt="." width={100} />
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                excepturi veniam.
              </p>
              <ButtonGroup>
                <Button style={{ borderRadius: 50 }}>PRIX 50DT</Button>
                <Button
                  style={{
                    backgroundColor: "#3738A2",
                    color: "#F5CBA7",
                    marginLeft: 10,
                    border: 0,
                  }}
                >
                  Ajouter au panier
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          <Card style={{ width: 300 }}>
            <CardImg src="/img/image1.png" alt="." width={100} />
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                excepturi veniam.
              </p>
              <ButtonGroup>
                <Button style={{ borderRadius: 50 }}>PRIX 50DT</Button>
                <Button
                  style={{
                    backgroundColor: "#3738A2",
                    color: "#F5CBA7",
                    marginLeft: 10,
                    border: 0,
                  }}
                >
                  Ajouter au panier
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </div>
        <a href="/nosproduits">
          <span
            style={{
              fontSize: 15,
              float: "right",
              marginRight: 20,
            }}
          >
            AFFICHER PLUS...
          </span>
        </a>
        <br />
        <br />
        <h2 style={{ color: "#3738A2", textAlign: "center" }}>
          NOS SPECIALITES
        </h2>
        <br />
        <div className="" style={{ marginBottom: 100 }}>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default Home;
