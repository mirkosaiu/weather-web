package controllers

import javax.inject._
import play.api._
import play.api.mvc._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class ApplicationController @Inject()(cc: ControllerComponents, usersDAO: UsersDAO) extends AbstractController(cc) {


  def index() = Action { implicit request: Request[AnyContent] =>

//    usersDAO.add
    Ok(views.html.index())
  }
}
