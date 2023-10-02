import { paypal,bitcoin,ausiff,cargo,mastercard,race } from "../components/PaymentComponent/assests"
export const payment=[
    {
        id:1,
        name:"Paypal",
        desc:"PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.",
        image:paypal,
        // checked:false
    },
    {
        id:2,
        name:"Mastercard",
        desc:"PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.",
        image:mastercard,
        // checked:false

    },
    {
        id:3,
        name:"Bitcoin",
        desc:"PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.",
        image:bitcoin,
        // checked:false

    }
]
export const shipping=[
    {
        id:1,
        name:"AUSFF",
        Delivery_time:"14-21 days",
        shipping_cost:"Free",
        Insurance:"Unavailable",
        image:ausiff,
        
    },
    {
        id:2,
        name:"RaceCouriers",
        Delivery_time:"14-21 days",
        shipping_cost:"10",
        Insurance:"Available",
        image:race
    },
    {
        id:3,
        name:"TranscoCargo",
        Delivery_time:"14-21 days",
        shipping_cost:"12",
        Insurance:"Available",
        image:cargo
    }
]