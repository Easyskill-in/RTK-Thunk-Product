import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProduct, remove, reset } from '../Store/ProductSlice'

const All = () => {
    const data = useSelector(state => state.Product)
    // console.log(data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchProduct())
    }, [])

    if (data.loading) {
        return <h1>loading....</h1>
    }
    return (
        <>
            <div className="main-all">

                {data.item.map((value, index) => (
                    <div key={value.id} className='sub-main-all'>
                        <img src={value.image} alt="" />
                        <h1>{value.title}</h1>
                        <h3>{value.category}</h3>
                        <span>{value.price}</span>
                        <button onClick={() => {
                            dispatch(remove(value.id))
                        }}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default React.memo(All)
