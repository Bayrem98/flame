import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Label,
} from "reactstrap";

const Inscription = () => {
  return (
    <>
      <div className="" style={{marginTop: 20, marginBottom: 10}}>
        <h2 style={{ textAlign: "center", color: "#F5CBA7", paddingBottom: 20 }}>
          INSCRIPTION DU COMPTE
        </h2>
        <img
          src="/img/logo.jpg"
          alt="."
          width={100}
          style={{ borderRadius: 50, position: "absolute", left: 670 }}
        />
        <br />
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: 100 }}
        >
          <Card style={{ width: 600 }}>
            <CardHeader
              style={{
                backgroundColor: "#3738A2",
                color: "white",
                textAlign: "center",
              }}
            >
              <p>Il Faut Remplir Le Formulaire</p>
            </CardHeader>
            <CardBody>
              <Input type="text" placeholder="Nom d'utilisateur"></Input>
              <br />
              <Input type="password" placeholder="Mot de passe"></Input>
              <br />
              <Label>Date de naissance</Label>
              <Input type="date" placeholder=""></Input>
            </CardBody>
            <CardFooter>
              <Button
                block
                style={{ backgroundColor: "#3738A2", color: "#F5CBA7" }}
              >
                VALIDER
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Inscription;
