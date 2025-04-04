import ThemedIcon from "../../theme/ThemedIcon";
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
        <ThemedIcon
          light={<Logo src="/assets/logos/header/header-logo-black.svg" />}
          dark={<Logo src="/assets/logos/header/header-logo-white.svg" />}
        />

        <SearchBar>
          <ThemedIcon
            light={
              <SearchIcon src="/assets/logos/header/search-icon-black.svg" />
            }
            dark={
              <SearchIcon src="/assets/logos/header/search-icon-white.svg" />
            }
          />
          <SearchInput type="text" placeholder="Search" />
        </SearchBar>
        <NavIcons>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem>Blog</NavItem>
        </NavIcons>
        <UserActions>
          <ThemedIcon
            light={
              <HeaderIcon src="/assets/logos/header/header-heart-black.svg" />
            }
            dark={
              <HeaderIcon src="/assets/logos/header/header-heart-white.svg" />
            }
          />
          <ThemedIcon
            light={
              <HeaderIcon src="/assets/logos/header/header-busket-black.svg" />
            }
            dark={
              <HeaderIcon src="/assets/logos/header/header-busket-white.svg" />
            }
          />
          <ThemedIcon
            light={
              <HeaderIcon src="/assets/logos/header/header-avatar-black.svg" />
            }
            dark={
              <HeaderIcon src="/assets/logos/header/header-avatar-white.svg" />
            }
          />
        </UserActions>
        <ThemedIcon
          light={
            <DarkLightButton
              onClick={toggleTheme}
              style={{ fontSize: "24px", color: "#111111" }}
            >
              🌘
            </DarkLightButton>
          }
          dark={
            <DarkLightButton
              onClick={toggleTheme}
              style={{ fontSize: "24px", color: "#ffffff" }}
            >
              🌕
            </DarkLightButton>
          }
        ></ThemedIcon>
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
