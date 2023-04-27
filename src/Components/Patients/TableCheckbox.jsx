import { Checkbox } from "@chakra-ui/react";
import React from "react";
export const TableCheckbox = React.forwardRef(
  ({ indeterminate, checked, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <Checkbox
          borderRadius={"20px"}
          bg={checked && "primary"}
          isChecked={checked}
          ref={resolvedRef}
          {...rest}
        />
      </>
    );
  }
);
