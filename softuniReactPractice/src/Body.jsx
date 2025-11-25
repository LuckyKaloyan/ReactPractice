import Article from "./Article";

export default function Body(){
    return (
         <section>
            <Article 
            p="paragraph one"
            h1="h1 one"
            h2="h2 one"
            />
            <Article
            p="paragraph two"
            h1="h1 two"
            h2="h2 two"
             />
         </section>  
    );
}