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

    const useCoupon = (name) => {
        console.log('useCoupon');
        const updateCoupon = {...state};
        console.log(updateCoupon)
        updateCoupon[name].status = false;
        setState(updateCoupon);
    };
    return (
        <div className={"div"}>
            <PropFunctionChild
                data={state.coupon1}
                setCoupon={useCoupon.bind(this, 'coupon1')}
            />

            <PropFunctionChild
                data={state.coupon2}
                setCoupon={useCoupon.bind(this, 'coupon2')}
            />
        </div>
    );
}

export default PropFunctionParent;