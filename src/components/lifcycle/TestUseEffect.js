import React, {useState, useEffect} from "react";

const TestUseEffect = () => {
    const [hasError, setError] = useState(false);
    const [users, setUser] = useState({
        name: 'A'
    });

    useEffect(() => {
        console.log('useEffect()');
        console.log('useEffect', users);
    }, [])

    /* ถ้าไม่ใส่ [] คือทำทุกครั้งที่ state เปลี่ยน
    useEffect(() => {
        console.log('useEffect()');
        console.log('useEffect', users);
    })*/


    function clickTest() {
        console.log('clickTest start', users);
        console.log('clickTest()');
        const temp = {...users};

        temp.name = 'B';
        setUser(temp);

        console.log('clickTest', users);
    }

    return (
        <div>
            <h4>test useffect</h4>
            <button onClick={clickTest}>open console</button>
        </div>
    );
}

export default TestUseEffect;