import React, { useRef, useEffect } from "react";

export default function PayPal3() {
  const paypal3 = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: " consejeria por 45 minutos a una hora",
                amount: {
                  currency_code: "USD",
                  value: 100.00,
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
          console.log(err);
        },
      })
      .render(paypal3.current);
  }, []);

  return (
    <div>
      <div ref={paypal3}></div>
    </div>
  );
}
