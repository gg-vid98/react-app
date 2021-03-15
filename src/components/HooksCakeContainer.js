import React from 'react'
//useSelector ==mapstatetoprops equi to get hold of any state in redux store
import {useSelector,useDispatch  } from 'react-redux';
import {buyCake  } from '../redux';

function HooksCakeContainer() {
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of cakes-{numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
