const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const FlexGrid = styled(Box)({
  display: "flex",
  justifyContent: "space-round",
  alignItems: "center",
});

export default FlexGrid;