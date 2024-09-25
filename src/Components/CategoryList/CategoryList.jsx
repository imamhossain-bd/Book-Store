import UseHookData from "../../Hooks/UseHookData";
import Card from "../Card/Card";




const CategoryList = () => {
     
    const {data} = UseHookData();
    
    return (
        <div className="grid grid-cols-3 mb-9 ml-8 gap-6 px-16">
            {
                data.map(item => (
                <Card key={item.bookId} item={item}></Card>))}
        </div>
    );
};

export default CategoryList;