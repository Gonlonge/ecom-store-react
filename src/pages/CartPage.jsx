// import React from "react";
// import {
//   GridItem,
//   GridItemContent,
//   GridItemPrice,
// } from "../components/styled-components/Card.styles";
// import { MainContainer } from "../components/styled-components/Body.styles";

// function CartPage() {
//   return (
//     <div>
//       <MainContainer>
//         <GridItem>
//           <GridItemContent>
//             {/* Add your product content here */}
//             <h3>Product Name</h3>
//             <p>Product Description</p>
//           </GridItemContent>
//           <GridItemPrice>
//             {/* Add your product price here */}
//             <h2>Price</h2>
//             <p>$99.99</p>
//           </GridItemPrice>
//         </GridItem>
//       </MainContainer>
//     </div>
//   );
// }

// export default CartPage;

import React from "react";
import { useProductsStore } from "../components/AddToCart";
import { shallow } from "zustand/shallow";
import {
  CartContainer,
  CountDisplay,
  TotalPriceDisplay,
  CartButton,
} from "../components/styled-components/AddToCart.styles";
import { MainContainer } from "../components/styled-components/Body.styles";

function CartPage() {
  const { count, totalPrice, removeOne } = useProductsStore(
    (state) => ({
      count: state.count,
      totalPrice: state.totalPrice,
      removeOne: state.removeOne,
    }),
    shallow
  );

  return (
    <MainContainer>
      <CartContainer>
        <TotalPriceDisplay>
          Total Price: {totalPrice.toFixed(2)}
        </TotalPriceDisplay>
        <CountDisplay>{count} Items</CountDisplay>
        <CartButton onClick={() => removeOne(100)}>-</CartButton>
      </CartContainer>
    </MainContainer>
  );
}

export default CartPage;
