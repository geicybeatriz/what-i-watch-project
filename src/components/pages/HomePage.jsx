import Footer from "../Footer/Footer";
import Header from "./../Header/Header";

export default function Homepage(){
    return (
        <>
            <Header />
            <Footer />
        </>
    )
}

//tentar colocar uma condição no useEffect pra trazer filmes e/ou séries
//para não ter que fazer 3 páginas diferentes. e usar só uma home