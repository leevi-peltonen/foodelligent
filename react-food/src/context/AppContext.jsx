import UserProvider from "./UserContext";
import MessageProvider from "./MessageContext";
import RecipeProvider from "./RecipeContext";


const AppContext = (props) => {
  return(
    <UserProvider>
      <MessageProvider>
        <RecipeProvider>
          {props.children}
        </RecipeProvider>
      </MessageProvider>
    </UserProvider>
  )
}

export default AppContext