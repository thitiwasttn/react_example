import React from "react";

const PropFunctionChild = (prop) => {
    let status = prop.data.status;
    let coupon = prop.data.secretWord;
    const onCouponUse = event => {
        prop.setCoupon();
    };
    return (
        <div>
            <div>
                รหัสคูปอง: {coupon}
            </div>
            <div>
                <button
                    onClick={onCouponUse}
                    disabled={!status}>ใช้คูปอง</button>
            </div>
        </div>
    );
}

export default PropFunctionChild;