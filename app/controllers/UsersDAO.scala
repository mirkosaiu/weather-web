package controllers

import javax.inject.Inject

import play.api.Configuration
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import play.api.mvc.{AbstractController, ControllerComponents}
import slick.jdbc.PostgresProfile.api._
import slick.jdbc.JdbcProfile

import scala.concurrent.{ExecutionContext, Future}


case class User(id: Long, firstName: String, lastName: String, mobile: String, email: String)

class UsersTable(tag: Tag) extends Table[User](tag, "users") {
  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def firstName = column[String]("first_name")
  def lastName = column[String]("last_name")
  def mobile = column[String]("mobile")
  def email = column[String]("email")
  def * = (id, firstName, lastName, mobile, email) <> (User.tupled, User.unapply)
}

class UsersDAO @Inject() (protected val dbConfigProvider: DatabaseConfigProvider, cc: ControllerComponents, config: Configuration)
                         (implicit ec: ExecutionContext) extends AbstractController(cc) with HasDatabaseConfigProvider[JdbcProfile] {
  def add = {
    val users = TableQuery[UsersTable]

    val setup = DBIO.seq(
      users += User(1, "Elon","Musk","0000000","elon@gmail.com")
    )

    db.run(setup)

  }
}



