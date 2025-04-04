import {
  BigContainer,
  BottomBar,
  BottomIcon,
  Category,
  DarkLightButton,
  HeaderIcon,
  Logo,
  NavIcons,
  NavItem,
  SearchBar,
  SearchIcon,
  SearchInput,
  TopBar,
  UserActions,
} from "./Header.styles";

type HeaderProps = {
  toggleTheme: () => void;
};

const Header = ({ toggleTheme }: HeaderProps) => {
  return (
    <BigContainer>
      <TopBar>
        <Logo src="/assets/logos/header/header-logo.svg" />
        <SearchBar>
          <SearchIcon src="/assets/logos/header/search-icon.svg" />
          <SearchInput type="text" placeholder="Search" />
        </SearchBar>
        <NavIcons>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem>Blog</NavItem>
        </NavIcons>
        <UserActions>
          <HeaderIcon src="/assets/logos/header/header-heart.svg" />
          <HeaderIcon src="/assets/logos/header/header-busket.svg" />
          <HeaderIcon src="/assets/logos/header/header-avatar.svg" />
        </UserActions>
        <DarkLightButton onClick={toggleTheme}>🌙/☀️</DarkLightButton>
      </TopBar>

      <BottomBar>
        <Category>
          <BottomIcon src="/assets/logos/bottom-header/phone-icon.svg" /> Phones
        </Category>
        <Category>
          <BottomIcon src="/assets/logos/bottom-header/computer-icon.svg" />
          Computers
        </Category>
        <Category>
          <BottomIcon src="/assets/logos/bottom-header/watch-icon.svg" /> Smart
          Watches
        </Category>
        <Category>
          <BottomIcon src="/assets/logos/bottom-header/camera-icon.svg" />
          Cameras
        </Category>
        <Category>
          <BottomIcon src="/assets/logos/bottom-header/headphone-icon.svg" />
          Headphones
        </Category>
        <Category>
          <BottomIcon src="/assets/logos/bottom-header/gaming-icon.svg" />
          Gaming
        </Category>
      </BottomBar>
    </BigContainer>
  );
};
export default Header;
