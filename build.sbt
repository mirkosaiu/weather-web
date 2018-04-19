name := """play-scala-seed"""
organization := "com.example"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.4"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.example.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.example.binders._"



enablePlugins(JavaAppPackaging)
enablePlugins(JavaServerAppPackaging)
enablePlugins(DockerPlugin)

import com.typesafe.sbt.packager.docker._
dockerCommands += Cmd("EXPOSE", "9000")
dockerCommands += Cmd("EXPOSE", "9443")



//javaOptions in Universal ++= Seq(
//  // JVM memory tuning
//  "-J-Xmx1024m",
//  "-J-Xms512m",
//
//  // Since play uses separate pidfile we have to provide it with a proper path
//  // name of the pid file must be play.pid
//  s"-Dpidfile.path=/var/run/${packageName.value}/play.pid",
//
//  // alternative, you can remove the PID file
//  // s"-Dpidfile.path=/dev/null",
//
//  // Use separate configuration file for production environment
//  s"-Dconfig.file=/usr/share/${packageName.value}/conf/production.conf",
//
//  // Use separate logger configuration file for production environment
//  s"-Dlogger.file=/usr/share/${packageName.value}/conf/production-logger.xml",
//
//  // You may also want to include this setting if you use play evolutions
//  "-DapplyEvolutions.default=true",
//
//  "-Dplay.http.secret.key=]<tm21RMDXj2@59@nnnR=<4RiWE^AoQo?yYpnrMSbW7WPfokVBQ>RUuCTAnQ:T:i"
//)