name := """weather-web"""
organization := "mirko"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.3"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test


//libraryDependencies ++= Seq(
//  "com.typesafe.play" %% "play-slick" % "3.0.0",
//  "com.typesafe.play" %% "play-slick-evolutions" % "3.0.0"
//)

//libraryDependencies += "org.postgresql" % "postgresql" % "42.2.1"



enablePlugins(JavaAppPackaging)
enablePlugins(JavaServerAppPackaging)
enablePlugins(DockerPlugin)

import com.typesafe.sbt.packager.docker._
dockerCommands += Cmd("EXPOSE", "9000")