-- MySQL dump 10.13  Distrib 5.7.11, for osx10.9 (x86_64)
--
-- Host: localhost    Database: trivia
-- ------------------------------------------------------
-- Server version	5.7.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `newscript`
--

DROP TABLE IF EXISTS `newscript`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `newscript` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) DEFAULT NULL,
  `question` varchar(200) DEFAULT NULL,
  `answer1` varchar(200) DEFAULT NULL,
  `answer2` varchar(200) DEFAULT NULL,
  `answer3` varchar(200) DEFAULT NULL,
  `show1` varchar(200) DEFAULT NULL,
  `show2` varchar(200) DEFAULT NULL,
  `show3` varchar(200) DEFAULT NULL,
  `correct` varchar(20) DEFAULT NULL,
  `selected` varchar(20) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newscript`
--

LOCK TABLES `newscript` WRITE;
/*!40000 ALTER TABLE `newscript` DISABLE KEYS */;
INSERT INTO `newscript` VALUES (1,NULL,'fdsfds','dsfds','fds',NULL,NULL,NULL,NULL,NULL,NULL),(2,'custom','q1','a1','a2','a3','s1','s2','s3','false','false'),(3,NULL,'fdsfds','fdsfds','fdfdsfds',NULL,NULL,NULL,NULL,NULL,NULL),(4,NULL,'fdsfdsf','dfdsfs','fdsfsd','fdsfsd','dfdsfd','fsdfds','fdsfds',NULL,NULL),(5,'custom','q1','a1','a2','a3','s1','s2','s3','false','false'),(6,'custom','q1','a1','','a3','s1','s2','s3','','false'),(7,'custom','JEFF IS HERE','a1','','a3','s1','s2','s3','','false'),(8,NULL,'dsfsd','fds','sdf','dsf','sdf','dsf','dsf',NULL,NULL),(9,NULL,'dsfds','fds','dsf','dsf','d','d','df',NULL,NULL),(10,NULL,'d','d','d','s','s','d',NULL,NULL,NULL),(11,'custom','JEFF IS HERE','a3','a1','','s1','s2','s3','','false'),(12,'custom','SEAN is HERE','a3','a1','','s1','s2','s3','','false'),(13,NULL,'fdgfd','fdg','YES','ss','ss','YES','ss',NULL,NULL),(14,NULL,'asdf','asdf','asdf','f','f','f','f',NULL,NULL),(15,NULL,'sadf','a','a','a','a','a','a',NULL,NULL),(16,NULL,'a','a','a','a','a','a','a',NULL,NULL),(17,'custom','a','a3','a1','','s1','s2','s3','','false'),(18,NULL,'nocategory','a3','a1','','s1','s2','s3','','false'),(19,NULL,'nocategory','a3','a1','','s1','s2','s3','','false'),(20,'custom','b','b','b','b','b','b','b',NULL,NULL),(21,'custom','dsfds','fdsf','fdsfds','dfdsds','dfdsf','fddsf','dsfsdfds',NULL,NULL),(22,'custom','dsfds','fds',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,'custom','dsfd','dfd','fdsf','fdf',NULL,NULL,NULL,NULL,NULL),(24,'custom','fdsfds','fdsf',NULL,NULL,'fdsf',NULL,NULL,NULL,NULL),(25,'custom','fdsfds',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,'custom','rewr',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(27,'custom','erew',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,'custom','erew',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(29,'custom','one',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(30,'custom','two',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,'custom','three',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(32,'custom','one',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(33,'custom','two',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(34,'custom','three',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(35,'custom','dsd','dfds','dsfds','dsads','sd',NULL,NULL,NULL,NULL),(36,'custom','two',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(37,'custom','three',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(38,'custom','dfds','dfds',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(39,'custom','2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(40,'custom','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(41,'custom','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(42,'custom','2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(43,'custom','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(44,'custom','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(45,'custom','2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(46,'custom','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(47,'custom','d',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(48,'custom','a',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(49,'custom','c',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(50,'custom','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(51,'custom','2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(52,'custom','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(53,'custom','sfddsf',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(54,'custom','grgr',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(55,'custom','hey',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(56,'custom',NULL,'qsqsq',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(57,'custom','w',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(58,'custom','dsfds','df',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `newscript` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scripts`
--

DROP TABLE IF EXISTS `scripts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scripts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(20) DEFAULT NULL,
  `question` varchar(200) DEFAULT NULL,
  `answer1` varchar(200) DEFAULT NULL,
  `answer2` varchar(200) DEFAULT NULL,
  `answer3` varchar(200) DEFAULT NULL,
  `show1` varchar(100) DEFAULT NULL,
  `show2` varchar(100) DEFAULT NULL,
  `show3` varchar(100) DEFAULT NULL,
  `correct` varchar(100) DEFAULT NULL,
  `selected` varchar(100) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scripts`
--

LOCK TABLES `scripts` WRITE;
/*!40000 ALTER TABLE `scripts` DISABLE KEYS */;
INSERT INTO `scripts` VALUES (1,'leaders','Name the popular book written by Sheryl Sandberg, that details how and why women should overcome sexism in the workplace.','Women Who Run with the Wolves','Women in Tech: Take Your Career to the Next Level','Lean In: Women, Work, and the Will to Lead','Incorrect!','Incorrect!','Correct!','answer3','false'),(2,'leaders','Name the organization that is dedicated to developing women tech leaders around the globe:','Techcrunch','WW Code','Center for Democracy + Techonology','Incorrect!','Correct!','Incorrect!','answer2','false'),(3,'leaders','Name the developer who penned a call to action on her Medium blog, calling for diversity data from all tech companies:','Tracy Chou','Marissa Mayer','Julia Neyers','Correct!','Incorrect!','Incorrect!','answer1','false'),(4,'leaders','Name the famous hashtag that was designed for “agitating for diversity since 2010”:','#morevisibilitymoreopportunity','#shecodes','#changetheratio','Incorrect!','Incorrect!','Correct!','answer3','false'),(5,'stack','List the MEAN stack:','Mongo, Express, Angular, Node','Mongo, Express, Angular, Nim','Mongoose, Express, A# .Net, Node','Correct! Mongo, Express, Angular, Node','Incorrect!','Incorrect!','answer1','false'),(6,'stack','Which one is not a programming language:','Pizza','Cayenne','Union','Incorrect!','Incorrect!','Correct!','answer3','false'),(7,'stack','List the LAMP stack:','Linux, Angular, Mongoose, Python','Linux, Apache, MySQL, PHP/Perl/Python','Lynx, Apache, MySQL, PostScript','Incorrect!','Correct!','Incorrect!','answer2','false'),(8,'stack','How many days did it take to write JavaScript?','30 days','10 days','5 days','Incorrect!','Correct!','Incorrect!','answer2','false'),(9,'stack','What is jQuery','a framework','a language','a library','Incorrect!','Incorrect!','Correct!','answer3','false'),(10,'herstory','Who was the first computer programmer:','Francis “Betty” Snyder','Ada Lovelace','Betty “Jean” Jennings Bartik','Incorrect!','Correct!','Incorrect!','answer2','false'),(11,'herstory','Which describes Grace Hopper:','First winner of “Computer Science Man of the Year” award from the Data Processing Management Association in 1969','First woman to receive the National Medal of Technology as an individual in 1991','Both','Incorrect!','Incorrect!','Correct!','answer3','false'),(12,'herstory','What is the story behind the term “debugged”:','There was a live moth stuck in one of the electrical switches controlling a circuit','There was a bug on the computer screen and they thought it looked like a \";\"','Someone was hacking highly secretive computer programming information','Correct!','Incorrect!','Incorrect!','answer1','false'),(13,'herstory','Who holds the title for the first female video game designer:','Carol Shaw','Grace Hopper','Someone was hacking highly secretive computer programming information','Correct!','Incorrect!','Incorrect!','answer1','false'),(14,NULL,'asdad','asda','2',NULL,'asd','no',NULL,NULL,NULL),(15,NULL,'sdsd','dss','',NULL,'dfdf',NULL,NULL,NULL,NULL),(16,'custom','q1','a1','a2','a3','s1','s2','s3','false','false'),(17,NULL,'dfsd','fdsfsd','dfds',NULL,NULL,NULL,NULL,NULL,NULL),(18,NULL,'dsfdsioj','slkfjldskj','flksjldksj','lkdsfjdlskj',NULL,NULL,NULL,NULL,NULL),(19,NULL,'dsfds','fdsfds',NULL,NULL,'sdfds',NULL,NULL,NULL,NULL),(20,NULL,'dsfds','dfds',NULL,NULL,'dfds',NULL,NULL,NULL,NULL),(21,NULL,'fdsfds','fdsf',NULL,NULL,'fdsf',NULL,NULL,NULL,NULL),(22,NULL,'dfgfd','gfdg','fdgfd',NULL,'fdgfd',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `scripts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-17 11:03:16
