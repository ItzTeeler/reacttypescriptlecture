# Unions
What is a Union? 
    Unions allow you to declare a variable that could be more than one type or more than one value
    Example: let myVariable: string | boolean;
             let myName : "Isaiah" | "jessie"

### Generics
What are Generics?
    Generics provide variables to types. When declaring a string array you can use string[], but if you wanted to use the built in array interface Array<> you can insert it's type between the alligators Array<string>

    We will using Generics for built in functions and types, such as the useState<> and it's type SetActionState<>
    Example: let [name, setName] = useState<string>("")

    You can also use Generics like parameters when creating interfaces
    Example: interface IStuff<Generic> {stuff: <Generic>}