import React, {useState} from "react";
import PropFunctionChild from "./PropFunctionChild";
import './PropFuntion.css'

const PropFunctionParent = () => {
    const [state, setState] = useState({
        coupon1: {
            secretWord: 'fklewkfewofkewpfkewofwkfp',
            status: true
        },
        coupon2: {
            secretWord: 'keowkdoewkfoewkfoewpkfw',
            status: true
        }
    });

    const couponName = [
        {
            name: 'coupon1',
            id: 1
        },
        {
            name: 'coupon2',
            id: 2
        }
    ];

    const useCoupon = (name) => {
        console.log('useCoupon');
        const updateCoupon = {...state};
        console.log(updateCoupon)
        updateCoupon[name].status = false;
        setState(updateCoupon);
    };
    const render = couponName.map((x) => {
        return (
            <div key={x.id}>
                <PropFunctionChild
                    data={state[x.name]}
                    setCoupon={useCoupon.bind(this, x.name)}
                />
            </div>
        );
    });

    return (
        <div className={"div"}>
            {render}
        </div>
    );
}

export default PropFunctionParent;