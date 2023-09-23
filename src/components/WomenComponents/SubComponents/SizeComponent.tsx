import React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
// import {Size} from "../../../utilities/Size"
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { sizeType } from '../../../utilities/type'
import { toggleSize } from "../../../slices/ColorPickerSlice"
const SizeComponent = () => {
    const dispatch = useAppDispatch();
    const size = useAppSelector((state) => state.colorpicker)

    return (
        <div className='space-y-3' >
            <p className='text-lg font-semibold font-lato'> SIZE</p>
            <div className='grid grid-rows-2 grid-cols-4 gap-4'>
                {
                    size.size.map((item: sizeType) => {
                        return (
                            <ToggleButton
                                value="gh"
                                onChange={() => {
                                    dispatch(toggleSize(item.id))
                                }}
                                style={{
                                    backgroundColor: item.clicked ? "#D1E2EB" : "white",
                                    width: '50px'
                                }}
                            >{item.title}</ToggleButton>
                        )
                    })
                }

            </div>
            <hr/>
        </div>
    )
}

export default SizeComponent
