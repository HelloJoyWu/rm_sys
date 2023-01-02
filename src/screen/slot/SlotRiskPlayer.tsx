import { useState } from 'react'
import '../../../res/css/slotRiskPlayer.scss'


const SlotRiskPlayer = () => {
    // const [count, setCount] = useState(0)



    return (
        <div className='bodyBox'>
            <p style={{ color: "#FFFFFF" }}>玩家畫面</p>
            <select>
                <option>請選擇你最愛的寵物</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Hamster</option>
                <option>Parrot</option>
                <option>Spider</option>
                <option>Goldfish</option>
            </select>
        </div>
    )


}

export default SlotRiskPlayer