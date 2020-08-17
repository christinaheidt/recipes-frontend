import { RecipeListItemProps } from "./recipe-list-props";
import RecipeListItem from "./recipe-list-item";
import styled from "styled-components";

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const RecipeList: React.FunctionComponent<{ recipes: RecipeListItemProps[] }> = (props) => {
    const listItems = props.recipes.map((recipe) => <RecipeListItem key={recipe.id} id={recipe.id} name={recipe.name} />)
    return <List>
        {listItems}
    </List>
}

export default RecipeList;