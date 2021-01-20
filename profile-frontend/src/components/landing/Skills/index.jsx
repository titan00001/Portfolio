
import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import Star from "components/common/Icons/Star";
import { skills } from 'data/config';
import { Wrapper, Grid, Item, Content } from "./styles";
import { Stats } from "../Skills/styles";

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="skills">
      {skills !== null && <h2>Skills</h2>}
      <Grid>
        {skills.map((skillset) => (
          <Item
            key={skillset.category}
            as="a"
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h4>{skillset.category}</h4>                
                {skillset.skillList.map((skillObj) => (
                    <Stats key = {skillObj.skill}>
                        <span>{skillObj.skill}</span>
                        <span>
                            {[...Array(Number(skillObj.expertise))].map((e,i) => (
                                <Star key={i} color={theme === "light" ? "#000" : "#fff"} />
                            ))}  
                        </span>
                        
                    </Stats>
                ))
                }
                
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
