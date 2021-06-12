import React, { useRef, useEffect}  from 'react'

export default function PayPal2() {

  const paypal2 = useRef();

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: " Cinco sesiones de talleres",
              amount: {
                currency_code: "USD",
                value: 5000.00,
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: (err) => {
        console.log(err)
      }
    })
      .render(paypal2.current);
  }, []);


  return (
    <div>
      <div ref={paypal2}></div>
    </div>
  )
}






