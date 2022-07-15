CREATE DATABASE  IF NOT EXISTS `bankapp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bankapp`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: bankapp
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agent`
--

DROP TABLE IF EXISTS `agent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agent` (
  `Agent_ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(10) DEFAULT NULL,
  `NIC` varchar(20) DEFAULT NULL,
  `DOB` varchar(45) DEFAULT NULL,
  `Phone_NO` char(10) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Username` varchar(20) DEFAULT NULL,
  `Password` varchar(20) DEFAULT NULL,
  `Gender` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Agent_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agent`
--

LOCK TABLES `agent` WRITE;
/*!40000 ALTER TABLE `agent` DISABLE KEYS */;
INSERT INTO `agent` VALUES (1,'S.Raman','991703462V','1999.06.18','0771233218','rama@gmail.com','raman','Rama@1234','Male'),(2,'T.Laxman','893642820V','1989.12.29','0775617848','laxman@gmail.com','laxi','Laxiii@123','Male'),(3,'T.Barathan','913642820V','1991.12.29','0773617848','barath@gmail.com','barath','Barath@123','Male'),(4,'S.Kugan','921642820V','1992.06.12','0763617348','kugan@gmail.com','kugan','Kugaaa@#3e','Male'),(5,'M.Ravanan','931642820V','1993.06.12','0763614351','ravan@gmail.com','ravan','Ravan$f@3','Male'),(6,'S.Hanuman','931703571V','1993.06.18','0751617321','hanukutty@gmail.com','hanuman','Hanumi##12','Male'),(7,'K.Kathir','931203571V','1993.04.29','0763617311','kathir@gmail.com','kaththi','Kaththi@1919','Male'),(8,'S.Seetha','887103571V','1988.07.28','0763617322','seethu@gmail.com','seetha','Azhagi@$#11','Female'),(9,'T.vaali','892203571V','1989.08.07','0763617324','vaali@gmail.com','vaalii','Wakkali@123','Male'),(10,'N.Kumar','882203571V','1988.08.07','0763617337','kumaru@gmail.com','kumaresan','Kumaru@#99','Male');
/*!40000 ALTER TABLE `agent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assigned_agent`
--

DROP TABLE IF EXISTS `assigned_agent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assigned_agent` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Customer_ID` int DEFAULT NULL,
  `Agent_ID` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `agent_idx` (`Agent_ID`),
  KEY `customer` (`Customer_ID`),
  CONSTRAINT `agent` FOREIGN KEY (`Agent_ID`) REFERENCES `agent` (`Agent_ID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `customer` FOREIGN KEY (`Customer_ID`) REFERENCES `customer` (`Customer_ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assigned_agent`
--

LOCK TABLES `assigned_agent` WRITE;
/*!40000 ALTER TABLE `assigned_agent` DISABLE KEYS */;
INSERT INTO `assigned_agent` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),(6,6,6),(7,7,6),(8,8,7);
/*!40000 ALTER TABLE `assigned_agent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `centralized_account`
--

DROP TABLE IF EXISTS `centralized_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `centralized_account` (
  `Account_No` char(10) NOT NULL,
  `Balance` decimal(8,2) DEFAULT NULL,
  `Account_Type` varchar(10) DEFAULT NULL,
  `Special_Request_Permission` int DEFAULT NULL,
  PRIMARY KEY (`Account_No`),
  KEY `Account_Type_idx` (`Account_Type`),
  KEY `Account_Type` (`Account_Type`),
  KEY `Acc_index` (`Account_No`),
  CONSTRAINT `type` FOREIGN KEY (`Account_Type`) REFERENCES `interest` (`Account_Type`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centralized_account`
--

LOCK TABLES `centralized_account` WRITE;
/*!40000 ALTER TABLE `centralized_account` DISABLE KEYS */;
INSERT INTO `centralized_account` VALUES ('222428',5100.50,'Child',0),('222430',50035.69,'Teen',0),('222432',84685.53,'Join',0),('222434',122325.26,'Senior',1),('222436',41576.80,'Adult',1),('222438',92392.90,'Adult',0),('222440',148080.35,'Adult',0);
/*!40000 ALTER TABLE `centralized_account` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `on_centralized_account_update` AFTER UPDATE ON `centralized_account` FOR EACH ROW update customer set IS_Active = "No" where NEW.Balance<=1000 and Account_NO=OLD.Account_No */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `on_centralized_account_update_Active` AFTER UPDATE ON `centralized_account` FOR EACH ROW update customer set IS_Active = "Yes" where NEW.Balance>1000 and Account_NO=OLD.Account_No */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `Customer_ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Username` varchar(20) DEFAULT NULL,
  `Password` varchar(20) DEFAULT NULL,
  `Account_No` char(10) DEFAULT NULL,
  `DOB` varchar(45) DEFAULT NULL,
  `Phone_No` char(10) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `IS_Active` varchar(15) DEFAULT 'Yes',
  PRIMARY KEY (`Customer_ID`),
  KEY `customer_ibfk_1_idx` (`Account_No`),
  CONSTRAINT `ACC_NUM` FOREIGN KEY (`Account_No`) REFERENCES `centralized_account` (`Account_No`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'T.Sasikumar','sasi','Sasi@123','222436','1998.08.16','0751234569','sasi@gmail.com','Male','Yes'),(2,'S.Arun','arun','Ar@mmm','222438','1996.04.16','0778908762','arun@gmail.com','Male','Yes'),(3,'M.Kavin','kaviya','Kavikavi#12','222428','2015.06.10','0764569823','kavi@gmail.com','Male','Yes'),(4,'M.Manoj','manoj','Manoj@1212','222430','2005.04.30','0748907654','mano@gmail.com','Male','Yes'),(5,'T.Sudhakar','sudha','Susudha@123','222434','1960.03.30','0721899875','sudha@gmail.com','Male','Yes'),(6,'S.Nivetha','nivi','Niviarun@123','222432','1986.04.30','0768766785','nivi@gmail.com','Female','Yes'),(7,'K.Srija','srija','srisri@1212','222432','1989.12.02','0778908900','srija@gmail.com','Female','Yes'),(8,'S.Anirudh','ani','Anirudh@123','222440','1987.04.08','0771232345','ani@gmail.com','Male','Yes');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fd_interest`
--

DROP TABLE IF EXISTS `fd_interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fd_interest` (
  `Period` decimal(8,2) NOT NULL,
  `rate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Period`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fd_interest`
--

LOCK TABLES `fd_interest` WRITE;
/*!40000 ALTER TABLE `fd_interest` DISABLE KEYS */;
INSERT INTO `fd_interest` VALUES (0.50,'13'),(1.00,'14'),(3.00,'15');
/*!40000 ALTER TABLE `fd_interest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fixed_deposit`
--

DROP TABLE IF EXISTS `fixed_deposit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fixed_deposit` (
  `Account_No` char(10) NOT NULL,
  `Customer_ID` int DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  `Period` decimal(8,2) DEFAULT NULL,
  `DateofDeposit` date DEFAULT NULL,
  PRIMARY KEY (`Account_No`),
  KEY `period_idx` (`Period`),
  KEY `fixed_deposit_ibfk_1` (`Customer_ID`),
  CONSTRAINT `period` FOREIGN KEY (`Period`) REFERENCES `fd_interest` (`Period`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fixed_deposit`
--

LOCK TABLES `fixed_deposit` WRITE;
/*!40000 ALTER TABLE `fixed_deposit` DISABLE KEYS */;
INSERT INTO `fixed_deposit` VALUES ('111123',5,10000.00,0.50,'2022-02-02'),('111125',7,20000.00,1.00,'2022-03-02'),('111127',8,30000.00,3.00,'2022-04-03');
/*!40000 ALTER TABLE `fixed_deposit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interest`
--

DROP TABLE IF EXISTS `interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interest` (
  `Account_Type` varchar(10) NOT NULL,
  `Rate` decimal(2,0) DEFAULT NULL,
  PRIMARY KEY (`Account_Type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest`
--

LOCK TABLES `interest` WRITE;
/*!40000 ALTER TABLE `interest` DISABLE KEYS */;
INSERT INTO `interest` VALUES ('Adult',10),('Child',12),('Join',7),('Senior',13),('Teen',11);
/*!40000 ALTER TABLE `interest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interest_log`
--

DROP TABLE IF EXISTS `interest_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interest_log` (
  `log_ID` int NOT NULL AUTO_INCREMENT,
  `Account_No` char(10) DEFAULT NULL,
  `Interest_add` decimal(8,2) DEFAULT NULL,
  `Balance` decimal(8,2) DEFAULT NULL,
  `Date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`log_ID`),
  KEY `Account_idx` (`Account_No`),
  CONSTRAINT `Account_number` FOREIGN KEY (`Account_No`) REFERENCES `centralized_account` (`Account_No`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest_log`
--

LOCK TABLES `interest_log` WRITE;
/*!40000 ALTER TABLE `interest_log` DISABLE KEYS */;
INSERT INTO `interest_log` VALUES (3,'222428',252.57,25257.30,'2022-07-15 06:40:11'),(4,'222430',422.50,46090.76,'2022-07-15 06:40:11'),(5,'222432',350.80,60136.53,'2022-07-15 06:40:11'),(6,'222434',1094.39,101020.88,'2022-07-15 06:40:11'),(7,'222436',321.54,38584.60,'2022-07-15 06:40:11'),(8,'222438',714.53,85743.55,'2022-07-15 06:40:11'),(9,'222440',893.16,107179.45,'2022-07-15 06:40:11'),(10,'222428',255.10,25509.87,'2022-07-15 06:40:45'),(11,'222430',426.37,46513.26,'2022-07-15 06:40:45'),(12,'222432',352.84,60487.33,'2022-07-15 06:40:45'),(13,'222434',1106.25,102115.27,'2022-07-15 06:40:45'),(14,'222436',324.22,38906.14,'2022-07-15 06:40:45'),(15,'222438',720.48,86458.08,'2022-07-15 06:40:45'),(16,'222440',900.61,108072.61,'2022-07-15 06:40:45'),(17,'222428',5.00,500.00,'2022-07-15 14:19:05'),(18,'222428',5.00,500.00,'2022-07-15 14:19:09'),(19,'222428',5.00,500.00,'2022-07-15 14:21:13'),(20,'222428',5.00,500.00,'2022-07-15 14:21:21'),(21,'222428',5.00,500.00,'2022-07-15 14:29:33'),(22,'222428',5.00,500.00,'2022-07-15 14:32:56'),(23,'222430',430.28,46939.63,'2022-07-15 14:32:56'),(24,'222432',474.29,81306.83,'2022-07-15 14:32:56'),(25,'222434',1228.91,113438.18,'2022-07-15 14:32:56'),(26,'222436',326.92,39230.36,'2022-07-15 14:32:56'),(27,'222438',726.49,87178.56,'2022-07-15 14:32:56'),(28,'222440',1164.36,139723.22,'2022-07-15 14:32:56'),(29,'222428',5.05,505.00,'2022-07-15 14:34:50'),(30,'222428',5.05,505.00,'2022-07-15 14:45:17'),(31,'222430',434.22,47369.91,'2022-07-15 14:45:17'),(32,'222432',477.06,81781.12,'2022-07-15 14:45:17'),(33,'222434',1242.23,114667.09,'2022-07-15 14:45:17'),(34,'222436',329.64,39557.28,'2022-07-15 14:45:17'),(35,'222438',732.54,87905.05,'2022-07-15 14:45:17'),(36,'222440',1174.06,140887.58,'2022-07-15 14:45:17'),(37,'222428',5.05,505.00,'2022-07-15 14:45:55'),(38,'222430',434.22,47369.91,'2022-07-15 14:45:55'),(39,'222432',477.06,81781.12,'2022-07-15 14:45:55'),(40,'222434',1242.23,114667.09,'2022-07-15 14:45:55'),(41,'222436',329.64,39557.28,'2022-07-15 14:45:55'),(42,'222438',732.54,87905.05,'2022-07-15 14:45:55'),(43,'222440',1174.06,140887.58,'2022-07-15 14:45:55'),(44,'222428',5.05,505.00,'2022-07-15 14:46:10'),(45,'222430',434.22,47369.91,'2022-07-15 14:46:10'),(46,'222432',477.06,81781.12,'2022-07-15 14:46:10'),(47,'222434',1242.23,114667.09,'2022-07-15 14:46:10'),(48,'222436',329.64,39557.28,'2022-07-15 14:46:10'),(49,'222438',732.54,87905.05,'2022-07-15 14:46:10'),(50,'222440',1174.06,140887.58,'2022-07-15 14:46:10'),(51,'222428',5.05,505.00,'2022-07-15 14:48:04'),(52,'222430',434.22,47369.91,'2022-07-15 14:48:04'),(53,'222432',477.06,81781.12,'2022-07-15 14:48:04'),(54,'222434',1242.23,114667.09,'2022-07-15 14:48:04'),(55,'222436',329.64,39557.28,'2022-07-15 14:48:04'),(56,'222438',732.54,87905.05,'2022-07-15 14:48:04'),(57,'222440',1174.06,140887.58,'2022-07-15 14:48:04'),(58,'222428',5.05,505.00,'2022-07-15 14:49:35'),(59,'222430',438.20,47804.13,'2022-07-15 14:49:35'),(60,'222432',479.84,82258.18,'2022-07-15 14:49:35'),(61,'222434',1255.68,115909.32,'2022-07-15 14:49:35'),(62,'222436',332.39,39886.92,'2022-07-15 14:49:35'),(63,'222438',738.65,88637.59,'2022-07-15 14:49:35'),(64,'222440',1183.85,142061.64,'2022-07-15 14:49:35'),(65,'222428',5.05,505.00,'2022-07-15 14:50:47'),(66,'222430',442.22,48242.33,'2022-07-15 14:50:47'),(67,'222432',482.64,82738.02,'2022-07-15 14:50:47'),(68,'222434',1269.29,117165.00,'2022-07-15 14:50:47'),(69,'222436',335.16,40219.31,'2022-07-15 14:50:47'),(70,'222438',744.80,89376.24,'2022-07-15 14:50:47'),(71,'222440',1193.71,143245.49,'2022-07-15 14:50:47'),(72,'222428',5.05,505.00,'2022-07-15 14:57:19'),(73,'222430',446.28,48684.55,'2022-07-15 14:57:19'),(74,'222432',485.45,83220.66,'2022-07-15 14:57:19'),(75,'222434',1283.04,118434.29,'2022-07-15 14:57:19'),(76,'222436',337.95,40554.47,'2022-07-15 14:57:19'),(77,'222438',751.01,90121.04,'2022-07-15 14:57:19'),(78,'222440',1203.66,144439.20,'2022-07-15 14:57:19'),(79,'222428',5.05,505.00,'2022-07-15 14:58:38'),(80,'222430',450.37,49130.83,'2022-07-15 14:58:38'),(81,'222432',488.29,83706.11,'2022-07-15 14:58:38'),(82,'222434',1296.94,119717.33,'2022-07-15 14:58:38'),(83,'222436',340.77,40892.42,'2022-07-15 14:58:38'),(84,'222438',757.27,90872.05,'2022-07-15 14:58:38'),(85,'222440',1213.69,145642.86,'2022-07-15 14:58:38'),(86,'222428',50.50,5050.00,'2022-07-15 14:59:09'),(87,'222430',454.49,49581.20,'2022-07-15 14:59:09'),(88,'222432',491.13,84194.40,'2022-07-15 14:59:09'),(89,'222434',1310.99,121014.27,'2022-07-15 14:59:09'),(90,'222436',343.61,41233.19,'2022-07-15 14:59:09'),(91,'222438',763.58,91629.32,'2022-07-15 14:59:09'),(92,'222440',1223.80,146856.55,'2022-07-15 14:59:09');
/*!40000 ALTER TABLE `interest_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `local_account`
--

DROP TABLE IF EXISTS `local_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `local_account` (
  `Agent_ID` int NOT NULL AUTO_INCREMENT,
  `Account_No` char(10) NOT NULL,
  `Balance` decimal(8,2) DEFAULT NULL,
  `Last_Update_Time` date DEFAULT NULL,
  PRIMARY KEY (`Agent_ID`,`Account_No`),
  KEY `local_account_ibfk_2` (`Account_No`),
  CONSTRAINT `local_account_ibfk_2` FOREIGN KEY (`Account_No`) REFERENCES `centralized_account` (`Account_No`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `local_account`
--

LOCK TABLES `local_account` WRITE;
/*!40000 ALTER TABLE `local_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `local_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record` (
  `Transaction_ID` char(10) NOT NULL,
  `Agent_ID` varchar(10) DEFAULT NULL,
  `Account_No` char(10) DEFAULT NULL,
  `Transaction_Type` varchar(8) DEFAULT NULL,
  `Amount` decimal(9,4) DEFAULT NULL,
  PRIMARY KEY (`Transaction_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `Account_No` char(10) DEFAULT NULL,
  `isActive` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES ('222428','No'),('222430','Yes'),('222432','Yes'),('222434','Yes'),('222436','Yes'),('222438','Yes'),('222440','Yes');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bankapp'
--
/*!50106 SET @save_time_zone= @@TIME_ZONE */ ;
/*!50106 DROP EVENT IF EXISTS `update_account_balance_with_interest` */;
DELIMITER ;;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;;
/*!50003 SET character_set_client  = utf8mb4 */ ;;
/*!50003 SET character_set_results = utf8mb4 */ ;;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;;
/*!50003 SET @saved_time_zone      = @@time_zone */ ;;
/*!50003 SET time_zone             = 'SYSTEM' */ ;;
/*!50106 CREATE*/ /*!50117 DEFINER=`root`@`localhost`*/ /*!50106 EVENT `update_account_balance_with_interest` ON SCHEDULE EVERY 1 MONTH STARTS '2022-07-15 12:10:45' ON COMPLETION NOT PRESERVE ENABLE DO call update_account_balances() */ ;;
/*!50003 SET time_zone             = @saved_time_zone */ ;;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;;
/*!50003 SET character_set_client  = @saved_cs_client */ ;;
/*!50003 SET character_set_results = @saved_cs_results */ ;;
/*!50003 SET collation_connection  = @saved_col_connection */ ;;
/*!50106 DROP EVENT IF EXISTS `update_account_balance_with_interest_FD` */;;
DELIMITER ;;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;;
/*!50003 SET character_set_client  = utf8mb4 */ ;;
/*!50003 SET character_set_results = utf8mb4 */ ;;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;;
/*!50003 SET @saved_time_zone      = @@time_zone */ ;;
/*!50003 SET time_zone             = 'SYSTEM' */ ;;
/*!50106 CREATE*/ /*!50117 DEFINER=`root`@`localhost`*/ /*!50106 EVENT `update_account_balance_with_interest_FD` ON SCHEDULE EVERY 1 MONTH STARTS '2022-01-01 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO call update_fixed_account_balances() */ ;;
/*!50003 SET time_zone             = @saved_time_zone */ ;;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;;
/*!50003 SET character_set_client  = @saved_cs_client */ ;;
/*!50003 SET character_set_results = @saved_cs_results */ ;;
/*!50003 SET collation_connection  = @saved_col_connection */ ;;
DELIMITER ;
/*!50106 SET TIME_ZONE= @save_time_zone */ ;

--
-- Dumping routines for database 'bankapp'
--
/*!50003 DROP PROCEDURE IF EXISTS `update_account_balances` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_account_balances`()
BEGIN
DECLARE cursor_Account_No VARCHAR(45) DEFAULT "";
DECLARE cursor_Balance decimal(8,2) DEFAULT 0.0;
DECLARE cursor_Account_Type VARCHAR(45) DEFAULT "";
DECLARE isActive VARCHAR(15) DEFAULT "";
DECLARE done INT DEFAULT FALSE;
DECLARE cursor_e CURSOR FOR SELECT Account_No, Balance, Account_Type FROM centralized_account;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
OPEN cursor_e;
read_loop: LOOP
  FETCH cursor_e INTO cursor_Account_No, cursor_Balance, cursor_Account_Type;
  IF done THEN
    LEAVE read_loop;
  END IF;
  select IS_Active into isActive from customer where Account_No=cursor_Account_No limit 1;
  update centralized_account 
  set Balance = cursor_Balance * ((100+ (select Rate from interest where Account_Type = cursor_Account_Type)/12)/100)
  where Account_No = cursor_Account_No and (isActive)="Yes";
  insert into interest_log(Account_No,Interest_add,Balance) values (cursor_Account_No,cursor_Balance * (((select Rate from interest where Account_Type = cursor_Account_Type)/12)/100),cursor_Balance);
END LOOP;
CLOSE cursor_e;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_fixed_account_balances` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_fixed_account_balances`()
BEGIN
DECLARE cursor_Account_No CHAR(10) DEFAULT "";
DECLARE cursor_Amount DECIMAL(10,2) DEFAULT 0.0;
DECLARE cursor_Period DECIMAL(8,2) DEFAULT 0.0;
DECLARE cursor_date DATE DEFAULT "0000-00-00";
DECLARE done INT DEFAULT FALSE;
DECLARE cursor_e CURSOR FOR SELECT Account_No,Amount,Period,DateofDeposit FROM fixed_deposit;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
OPEN cursor_e;
read_loop: LOOP
  FETCH cursor_e INTO cursor_Account_No, cursor_Amount, cursor_Period,cursor_date;
  IF done THEN
    LEAVE read_loop;
  END IF;
  update centralized_account 
  set Balance =Balance+ cursor_Amount * (((select rate from fd_interest where Period = cursor_Period)/12)/100)
  where Account_No = (select customer.Account_No from fixed_deposit inner join customer on fixed_deposit.Customer_ID=customer.Customer_ID where fixed_deposit.Account_No=cursor_Account_No);
  -- insert into interest_log(Account_No,Interest_add,Balance) values (cursor_Account_No,cursor_Balance * (((select Rate from interest where Account_Type = cursor_Account_Type)/12)/100),cursor_Balance);
END LOOP;
CLOSE cursor_e;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-15 20:31:45
