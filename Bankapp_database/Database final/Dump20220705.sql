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
  PRIMARY KEY (`Agent_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agent`
--

LOCK TABLES `agent` WRITE;
/*!40000 ALTER TABLE `agent` DISABLE KEYS */;
INSERT INTO `agent` VALUES (1,'S.Raman'),(2,'T.Laxman'),(3,'T.Barathan'),(4,'S.Kugan'),(5,'M.Ravanan'),(6,'S.Hanuman'),(7,'K.Kathir'),(8,'S.Seetha'),(9,'T.vaali'),(10,'N.Kumar');
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
  CONSTRAINT `type` FOREIGN KEY (`Account_Type`) REFERENCES `interest` (`Account_Type`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centralized_account`
--

LOCK TABLES `centralized_account` WRITE;
/*!40000 ALTER TABLE `centralized_account` DISABLE KEYS */;
INSERT INTO `centralized_account` VALUES ('222428',10000.00,'Child',0),('222430',20000.00,'Teen',0),('222432',35000.00,'Join',0),('222434',38000.00,'Senior',1),('222436',18000.00,'Adult',1),('222438',40000.00,'Adult',0),('222440',50000.00,'Adult',0);
/*!40000 ALTER TABLE `centralized_account` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `customer` VALUES (1,'T.Sasikumar','sasi','Sasi@123','222436','1998.08.16','0751234569','sasi@gmail.com'),(2,'S.Arun','arun','Ar@mmm','222438','1996.04.16','0778908762','arun@gmail.com'),(3,'M.Kavin','kaviya','Kavikavi#12','222428','2015.06.10','0764569823','kavi@gmail.com'),(4,'M.Manoj','manoj','Manoj@1212','222430','2005.04.30','0748907654','mano@gmail.com'),(5,'T.Sudhakar','sudha','Susudha@123','222434','1960.03.30','0721899875','sudha@gmail.com'),(6,'S.Nivetha','nivi','Niviarun@123','222432','1986.04.30','0768766785','nivi@gmail.com'),(7,'K.Srija','srija','srisri@1212','222432','1989.12.02','0778908900','srija@gmail.com'),(8,'S.Anirudh','ani','Anirudh@123','222440','1987.04.08','0771232345','ani@gmail.com');
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
  `Account_No` int NOT NULL,
  `Customer_ID` int DEFAULT NULL,
  `Amount` decimal(8,2) DEFAULT NULL,
  `Period` decimal(8,2) DEFAULT NULL,
  `DateofDeposit` varchar(45) DEFAULT NULL,
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
INSERT INTO `fixed_deposit` VALUES (111123,6,10000.00,0.50,'2022.02.30'),(111125,7,20000.00,1.00,'2022.03.06'),(111127,8,30000.00,3.00,'2022.01.20');
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
-- Dumping events for database 'bankapp'
--

--
-- Dumping routines for database 'bankapp'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-05 22:36:04
