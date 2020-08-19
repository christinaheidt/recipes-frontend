import RecipeListItem from "./recipe-list-item";
import styled from "styled-components";
import FadeIn from 'react-fade-in';
import { Recipe } from "./recipe";

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const RecipeList: React.FunctionComponent<{recipes: Recipe[]}> = (props) => {
    const listItems = props.recipes.map((recipe) => <RecipeListItem key={recipe.id} id={recipe.id} name={recipe.name} imagepath={recipe.imagepath} />)
    return <List>
        <FadeIn>
            {listItems}
        </FadeIn>
    </List>
}

export default RecipeList;