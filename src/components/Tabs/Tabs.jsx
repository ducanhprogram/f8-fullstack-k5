import { getProducts } from "@/reducers/product/actions";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Tabs({ defaultIndex = 0, children, onChange }) {
    const [currentIndex, setCurrentIndex] = useState(defaultIndex);
    const prevIndex = useRef(defaultIndex);

    const tabs = React.Children.toArray(children);

    useEffect(() => {
        if (prevIndex.current !== currentIndex) {
            onChange(currentIndex);
        }
        prevIndex.current = currentIndex;
    }, [currentIndex, onChange]);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getProducts());
    // }, [dispatch]);

    // const currentUser = useSelector((state) => {
    //     return state.auth.currentUser;
    // });

    // console.log(currentUser);

    return (
        <div className="tabs-container">
            {/* {currentUser && <p>Hi, {currentUser.firstName}</p>} */}
            <div className="tabs-list">
                {tabs.map((child, index) => {
                    const active = currentIndex === index;
                    return (
                        <button
                            key={index}
                            className="tab-item"
                            style={{
                                color: active ? "red" : "#333",
                                fontWeight: active ? "bold" : "normal",
                            }}
                            onClick={() => setCurrentIndex(index)}
                        >
                            {child.props.title}
                        </button>
                    );
                })}
            </div>

            <div className="tabs-content">{tabs[currentIndex]}</div>
        </div>
    );
}

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    defaultIndex: PropTypes.number,
    onChange: PropTypes.func,
};

export default Tabs;
