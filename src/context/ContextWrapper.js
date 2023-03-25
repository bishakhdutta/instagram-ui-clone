import { createContext } from "react";
import { DiscoverContext } from "./DiscoverContext";
import { PostContext } from "./PostContext";
import { StoryContext } from "./StoryContext";
import { ThemeContext } from "./ThemeContext";
const Wrapper = createContext(null);
export function ContextWrapper({ children }) {
  return (
    <Wrapper.Provider>
      <PostContext>
        <DiscoverContext>
          <StoryContext>
            <ThemeContext>{children}</ThemeContext>
          </StoryContext>
        </DiscoverContext>
      </PostContext>
    </Wrapper.Provider>
  );
}
