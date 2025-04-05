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

interface TabProps {
  active?: boolean;
}

export const Tab = styled.button<TabProps>(({ theme, active }) => ({
  border: "none",
  background: theme.colors.background,
  color: theme.colors.text,
  fontWeight: 700,
  fontSize: "16px",
  borderBottom: active ? "3px solid red" : `2px solid ${theme.colors.text}`,
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
