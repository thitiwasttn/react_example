import React, {useState} from "react";
import PropFunctionChild from "./PropFunctionChild";
import './PropFuntion.css'

const PropFunctionParent = () => {
    const [state, setState] = useState({
        coupon1: [
            {
                id: 1,
                secretWord: 'fklewkfewofkewpfkewofwkfp',
                status: true
            },
            {
                id: 2,
                secretWord: 'keowkdoewkfoewkfoewpkfw',
                status: true
            },
            {
                id: 3,
                secretWord: 'dawdwacdwcdq',
                status: true
            },
            {
                id: 4,
                secretWord: '4035o340kt43l,fokfowekfoe-',
                status: true
            }
        ]
    });

    const useCoupon = (id) => {
        const updateCoupon = {...state};
        for (let updateCouponKey of updateCoupon.coupon1) {
            if (updateCouponKey.id === id) {
                updateCouponKey.status = false;
                break;
            }
        }
        setState(updateCoupon);

    };
    const render = state.coupon1.map((x) => {
        return (
            <div key={x.id}>
                <PropFunctionChild
                    data={x}
                    setCoupon={useCoupon.bind(this, x.id)}
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