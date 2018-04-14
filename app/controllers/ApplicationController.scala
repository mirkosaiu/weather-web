package controllers

import javax.inject._
import play.api._
import play.api.http.HttpEntity
import play.api.mvc._
import play.filters.headers.SecurityHeadersFilter

import scala.reflect.io.File

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class ApplicationController @Inject()(cc: ControllerComponents, assets: Assets) extends AbstractController(cc) {





  def index = assets.at("index.html")

  def assetOrDefault(resource: String) = if (resource.contains(".")) assets.at(resource) else index

}
