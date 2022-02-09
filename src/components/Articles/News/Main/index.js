import React from "react";
import NewsSlider from "../../../widgets/NewsSlider/slider";
import NewsList from "../../../widgets/NewsList/newsList";


const NewsMain = () => {
    return (
        <div>
            <NewsSlider
                type="featured"
                settings={{dots:true}}
                start={0}
                amount={3}
            />
            <br/>
            <div className="container">
                <NewsList
                    type="cardMain"
                    loadMore={true}
                    start={3}
                    amount={3}
                />
            </div>

        </div>
    )
}

export default NewsMain