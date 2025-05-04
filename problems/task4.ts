interface Book{
    title: string;
    author: string;
    pages: number;
}
interface Magazine{
    title: string;
    issue: number;
    publisher: string;
}

type bookOrMagazine = Book | Magazine;
type bookAndMagazine = Book & Magazine;

const unionType:bookOrMagazine={
 
    title: "hello world",
    author: "rafi",
    pages: 100
}
const intersectionType:bookAndMagazine={
    author:"rafi",
    issue:100,
    publisher:'rokomari',
    title: "hello world",
    pages: 100
}
