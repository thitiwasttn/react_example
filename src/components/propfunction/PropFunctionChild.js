import React from "react";

const PropFunctionChild = (prop) => {
    let status = prop.data.status;
    let coupon = prop.data.secretWord;
    const onCouponUse = event => {
        prop.setCoupon();
    };
    let text_red = {
        color: 'red'
    }
    return (
        <div>
            <div>
                รหัสคูปอง: {coupon} <span style={text_red}>{!status ? 'คูปองถูกใช้ไปแล้ว' : ''}</span>
            </div>
            <div>
                <button
                    onClick={onCouponUse}
                    disabled={!status}>ใช้คูปอง
                </button>
            </div>
        </div>
    );
}

export default PropFunctionChild;