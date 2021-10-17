import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import CardNews from "../../features/cardNews";
import { getHome } from "../../services/apiHome";
import "./home.css";

const Home = () => {
  const [titleText, setTitleText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const title = async() =>{
      const welcomeText = await getHome();
      setTitleText(welcomeText);
      setLoading(false);
    }
    title();
  }, [])
    
  return (
    <div>
      {
        !loading && (
            <h1 className="title__main">{titleText.data.data.welcome_text}</h1>
        )
      }
      <section className="news__container">
        <h3>Ultimas Novedades</h3>
        <div className="news__flex">
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
        <div className="btn__container">
          <Button
            rightIcon={<ArrowForwardIcon />}
            color="white"
            variant="outline"
            _hover={{
              background: "white",
              color: "black",
            }}
          >
            Ver todas
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
