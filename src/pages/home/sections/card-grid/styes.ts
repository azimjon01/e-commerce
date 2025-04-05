import styled from "@emotion/styled";

export const Wrapper = styled.div({
  padding: "20px",
});

export const TabsWrapper = styled.div({
  display: "flex",
  gap: "20px",
  marginBottom: "20px",
  flexWrap: "wrap",
});

export const Tab = styled.button(({ active }: { active?: boolean }) => ({
  border: "none",
  background: "none",
  fontWeight: active ? 600 : 400,
  fontSize: "16px",
  borderBottom: active ? "2px solid black" : "none",
  cursor: "pointer",
  padding: "8px 0",
}));

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  "@media(max-width: 768px)": {
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
  },
});
