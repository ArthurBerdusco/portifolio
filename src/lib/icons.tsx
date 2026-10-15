import type { IconType } from "react-icons";
import { FaAws, FaCode, FaDatabase, FaGitAlt, FaGithub, FaJava, FaLayerGroup, FaPlug, FaShieldAlt } from "react-icons/fa";
import {
  SiCss,
  SiDocker,
  SiGithubactions,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiReact,
  SiRedis,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiThymeleaf,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const map: Record<string, IconType> = {
  java: FaJava,
  "spring boot": SiSpringboot,
  springboot: SiSpringboot,
  "spring security": SiSpringsecurity,
  "spring data jpa": SiSpring,
  spring: SiSpring,
  hibernate: SiHibernate,
  jdbc: FaDatabase,
  "apis restful": FaPlug,
  "api rest": FaPlug,
  rest: FaPlug,
  thymeleaf: SiThymeleaf,
  "react native": TbBrandReactNative,
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  html5: SiHtml5,
  css: SiCss,
  css3: SiCss,
  sql: FaDatabase,
  mysql: SiMysql,
  "sql server": FaDatabase,
  mongodb: SiMongodb,
  redis: SiRedis,
  git: FaGitAlt,
  github: FaGithub,
  "github actions": SiGithubactions,
  docker: SiDocker,
  aws: FaAws,
  poo: FaLayerGroup,
  mvc: FaLayerGroup,
  "segurança da informação": FaShieldAlt,
};

export function techIcon(name: string): IconType {
  return map[name.trim().toLowerCase()] ?? FaCode;
}
