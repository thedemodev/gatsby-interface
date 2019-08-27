import React from "react"

import { storiesOf } from "@storybook/react"

import { IntegrationRow } from "./"
import { StoryUtils } from "../../../utils/storybook"
import NetlifyLogo from "../../../assets/NetlifyLogo"
import contentfulLogo from "../../../assets/contentfulLogo.png"
import netlifyLogo from "../../../assets/netlifyLogo.svg"

storiesOf(`core/IntegrationRow`, module)
  .add(`default usage`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <IntegrationRow>
          <IntegrationRow.Logo>
            <img src={contentfulLogo} alt="" />
          </IntegrationRow.Logo>
          <IntegrationRow.EditButton />
          <IntegrationRow.Content details={null} />
        </IntegrationRow>
        <IntegrationRow isConnected={true}>
          <IntegrationRow.Logo>
            <img src={contentfulLogo} alt="" />
          </IntegrationRow.Logo>
          <IntegrationRow.EditButton />
          <IntegrationRow.Content
            details={[
              {
                name: `space name`,
                value: `gatsby-provisioned-blog-fba42`,
                url: `https://gatsbyjs.com`,
              },
              {
                name: `space id`,
                value: `vkdbses99qqt`,
              },
            ]}
          />
        </IntegrationRow>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`shortcut usage`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <IntegrationRow
          title="Netlify"
          logoUrl={netlifyLogo}
          onClickEdit={() => alert(`onClickEdit()`)}
          isConnected={false}
          details={null}
        />
        <IntegrationRow
          title="Netlify"
          logoUrl={netlifyLogo}
          onClickEdit={() => alert(`onClickEdit()`)}
          isConnected={true}
          details={[
            {
              name: `site`,
              value: `hello-world-01`,
              url: `https://gatsbyjs.com`,
            },
            {
              name: `team`,
              value: `shannonb_ux`,
            },
          ]}
        />
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`with inline SVG as logo`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <IntegrationRow>
          <IntegrationRow.Logo>
            <NetlifyLogo />
          </IntegrationRow.Logo>
          <IntegrationRow.EditButton />
          <IntegrationRow.Content />
        </IntegrationRow>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))