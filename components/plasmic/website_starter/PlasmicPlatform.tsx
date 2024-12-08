// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vqQvWe7o4hyh6y1qHSdfJm
// Component: WKwFz6pJxY_S

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { DataProvider } from "@plasmicpkgs/plasmic-basic-components";
import Screen from "../../Screen"; // plasmic-import: 2GCgUXo3zL3x/component

import { useScreenVariants as useScreenVariantsg6ZnpAw1ELa8 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: G6ZnpAw1eLA8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: vqQvWe7o4hyh6y1qHSdfJm/projectcss
import sty from "./PlasmicPlatform.module.css"; // plasmic-import: WKwFz6pJxY_S/css

import Logoipsum277Svg2Icon from "./icons/PlasmicIcon__Logoipsum277Svg2"; // plasmic-import: nMVjWeSwC67o/icon
import Logoipsum311SvgIcon from "./icons/PlasmicIcon__Logoipsum311Svg"; // plasmic-import: om_HCTLxuGKY/icon
import Logoipsum228SvgIcon from "./icons/PlasmicIcon__Logoipsum228Svg"; // plasmic-import: -ErOtr61pyiZ/icon
import Logoipsum286SvgIcon from "./icons/PlasmicIcon__Logoipsum286Svg"; // plasmic-import: XMa26kP_qxIh/icon
import Logoipsum248SvgIcon from "./icons/PlasmicIcon__Logoipsum248Svg"; // plasmic-import: AIP9XxEEbfNW/icon

createPlasmicElementProxy;

export type PlasmicPlatform__VariantMembers = {};
export type PlasmicPlatform__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlatform__VariantsArgs;
export const PlasmicPlatform__VariantProps = new Array<VariantPropType>();

export type PlasmicPlatform__ArgsType = {};
type ArgPropType = keyof PlasmicPlatform__ArgsType;
export const PlasmicPlatform__ArgProps = new Array<ArgPropType>();

export type PlasmicPlatform__OverridesType = {
  root?: Flex__<"div">;
  dataProvider?: Flex__<typeof DataProvider>;
};

export interface DefaultPlatformProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPlatform__RenderFunc(props: {
  variants: PlasmicPlatform__VariantsArgs;
  args: PlasmicPlatform__ArgsType;
  overrides: PlasmicPlatform__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsg6ZnpAw1ELa8()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <DataProvider
            data-plasmic-name={"dataProvider"}
            data-plasmic-override={overrides.dataProvider}
            className={classNames("__wab_instance", sty.dataProvider)}
            data={[
              {
                platform: 1,
                lifters: [
                  {
                    name: "Abigail Bossy",
                    team: "Iron Resolve Powerlifting",
                    "best lift": "Squat: 115 kg (253.53 lbs)",
                    competition: "Women's Raw Open 72 kg",
                    onScreen: false
                  },
                  {
                    name: "Kava Kumar",
                    team: "Elite Force Fitness",
                    "best lift": "Deadlift: 140 kg (308.65 lbs)",
                    competition: "Women's Raw Junior 63 kg",
                    onScreen: false
                  },
                  {
                    name: "Abby Pieces",
                    team: "Steel Titans Club",
                    "best lift": "Bench Press: 85 kg (187.39 lbs)",
                    competition: "Women's Raw Open 84 kg",
                    onScreen: false
                  },
                  {
                    name: "Diane John",
                    team: "Victory Barbell",
                    "best lift": "Deadlift: 155 kg (341.72 lbs)",
                    competition: "Women's Raw Master 1 76 kg",
                    onScreen: false
                  }
                ]
              },
              {
                platform: 2,
                lifters: [
                  {
                    name: "Kellly Ryan",
                    team: "Atlas Strength Collective",
                    "best lift": "Bench Press: 90 kg (198.41 lbs)",
                    competition: "Women's Raw Open 64 kg",
                    onScreen: false
                  },
                  {
                    name: "Katy Dine",
                    team: "Iron Legends",
                    "best lift": "Squat: 130 kg (286.60 lbs)",
                    competition: "Women's Raw Junior 75 kg",
                    onScreen: false
                  },
                  {
                    name: "Courtney Oshea",
                    team: "Barbell Warriors",
                    "best lift": "Deadlift: 150 kg (330.69 lbs)",
                    competition: "Women's Raw Open 70 kg",
                    onScreen: true
                  },
                  {
                    name: "Bruce Wayne",
                    team: "Gotham Heavyweights",
                    "best lift": "Squat: 170 kg (374.78 lbs)",
                    competition: "Men's Raw Open 90 kg",
                    onScreen: false
                  }
                ]
              }
            ]}
            name={"competitors"}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
                  <Screen
                    className={classNames("__wab_instance", sty.screen___3TEgS)}
                    numberOfPlatform={(() => {
                      try {
                        return $ctx.competitors[0].platform;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                  />

                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__vyRu)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__u1M3B)}
                    >
                      <Logoipsum277Svg2Icon
                        className={classNames(projectcss.all, sty.svg___2VQq)}
                        role={"img"}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox___3JlB)}
                    >
                      <Logoipsum311SvgIcon
                        className={classNames(projectcss.all, sty.svg__tBcy3)}
                        role={"img"}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ngJno)}
                    >
                      <Logoipsum228SvgIcon
                        className={classNames(projectcss.all, sty.svg__h8FfV)}
                        role={"img"}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ra82P)}
                    >
                      <Logoipsum286SvgIcon
                        className={classNames(projectcss.all, sty.svg__woSCj)}
                        role={"img"}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__wGth4)}
                    >
                      <Logoipsum248SvgIcon
                        className={classNames(projectcss.all, sty.svg__oi9A)}
                        role={"img"}
                      />
                    </div>
                  </Stack__>
                  <Screen
                    className={classNames("__wab_instance", sty.screen__wmjkg)}
                    intakeLifters={(() => {
                      try {
                        return $ctx.competitors[1].lifters;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [
                            {
                              name: "Abigail Bossy",
                              team: "Iron Resolve Powerlifting",
                              "best lift": "Squat: 115 kg (253.53 lbs)",
                              competition: "Women's Raw Open 72 kg",
                              onScreen: true
                            },
                            {
                              name: "Kava Kumar",
                              team: "Elite Force Fitness",
                              "best lift": "Deadlift: 140 kg (308.65 lbs)",
                              competition: "Women's Raw Junior 63 kg",
                              onScreen: false
                            },
                            {
                              name: "Abby Pieces",
                              team: "Steel Titans Club",
                              "best lift": "Bench Press: 85 kg (187.39 lbs)",
                              competition: "Women's Raw Open 84 kg",
                              onScreen: false
                            },
                            {
                              name: "Diane John",
                              team: "Victory Barbell",
                              "best lift": "Deadlift: 155 kg (341.72 lbs)",
                              competition: "Women's Raw Master 1 76 kg",
                              onScreen: false
                            }
                          ];
                        }
                        throw e;
                      }
                    })()}
                    mirrored={true}
                    numberOfPlatform={(() => {
                      try {
                        return $ctx.competitors[1].platform;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    video={{
                      src: "/plasmic/website_starter/images/victorFreitasNA0UdnDbxysUnsplashJpg.jpg",
                      fullWidth: 5184,
                      fullHeight: 3456,
                      aspectRatio: undefined
                    }}
                  />
                </React.Fragment>
              )}
            </DataCtxReader__>
          </DataProvider>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "dataProvider"],
  dataProvider: ["dataProvider"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  dataProvider: typeof DataProvider;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlatform__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlatform__VariantsArgs;
    args?: PlasmicPlatform__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlatform__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPlatform__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPlatform__ArgProps,
          internalVariantPropNames: PlasmicPlatform__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlatform__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlatform";
  } else {
    func.displayName = `PlasmicPlatform.${nodeName}`;
  }
  return func;
}

export const PlasmicPlatform = Object.assign(
  // Top-level PlasmicPlatform renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    dataProvider: makeNodeComponent("dataProvider"),

    // Metadata about props expected for PlasmicPlatform
    internalVariantProps: PlasmicPlatform__VariantProps,
    internalArgProps: PlasmicPlatform__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPlatform;
/* prettier-ignore-end */