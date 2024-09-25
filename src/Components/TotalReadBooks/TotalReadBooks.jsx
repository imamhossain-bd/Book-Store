import { useState } from 'react';
import BookCardList from "../../Components/BookCardList/BookCardList";
import useLocalStorage from "../../Hooks/useLocalStorage";

const TotalReadBooks = ()  => {
    const [activeTab, setActiveTab] = useState('Read Books');

    const keyName = activeTab === 'Read Books' ? 'Read Books' : 'Wishlist Books';
    
    const { localData } = useLocalStorage(keyName);

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="px-16">
            <div role="tablist" className="tabs tabs-lifted mt-10 mb-5">
            <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg font-semibold" aria-label="Read Books" checked={activeTab === 'Read Books'}  onChange={() => handleTabChange('Read Books')} />

                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                    localData.map((data) => (<BookCardList key={data.bookId} data={data}></BookCardList>))
                 }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg font-semibold" aria-label="Wishlist Books" checked={activeTab === 'Wishlist Books'} onChange={() => handleTabChange('Wishlist Books')}  />
                
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                    localData.map((data) => (<BookCardList key={data.bookId} data={data}></BookCardList>))
                 }
                </div>

            </div>
        </div>
    );
};

export default TotalReadBooks;
