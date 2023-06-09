USE [BankDB]
GO
/****** Object:  Table [dbo].[Account_tbl]    Script Date: 09/06/2023 11:31:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account_tbl](
	[AccountID] [int] IDENTITY(1,1) NOT NULL,
	[AccountName] [nvarchar](50) NULL,
	[Currency] [nvarchar](20) NULL,
	[AccountType] [nvarchar](20) NULL,
	[TransferAmount] [decimal](18, 2) NULL,
 CONSTRAINT [PK_Account_tbl] PRIMARY KEY CLUSTERED 
(
	[AccountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AccountOwnerAssociation]    Script Date: 09/06/2023 11:31:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountOwnerAssociation](
	[AccountID] [int] NOT NULL,
	[OwnerID] [nvarchar](9) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[AccountID] ASC,
	[OwnerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Owner_tbl]    Script Date: 09/06/2023 11:31:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Owner_tbl](
	[OwnerID] [nvarchar](9) NOT NULL,
	[FName] [nvarchar](50) NULL,
	[LName] [nvarchar](50) NULL,
	[Gender] [nvarchar](6) NULL,
	[DateOfBirth] [date] NULL,
 CONSTRAINT [PK_Owner_tbl] PRIMARY KEY CLUSTERED 
(
	[OwnerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AccountOwnerAssociation]  WITH CHECK ADD  CONSTRAINT [FK_AccountOwnerAssociation_Account_tbl] FOREIGN KEY([AccountID])
REFERENCES [dbo].[Account_tbl] ([AccountID])
GO
ALTER TABLE [dbo].[AccountOwnerAssociation] CHECK CONSTRAINT [FK_AccountOwnerAssociation_Account_tbl]
GO
ALTER TABLE [dbo].[AccountOwnerAssociation]  WITH CHECK ADD  CONSTRAINT [FK_AccountOwnerAssociation_Owner_tbl] FOREIGN KEY([OwnerID])
REFERENCES [dbo].[Owner_tbl] ([OwnerID])
GO
ALTER TABLE [dbo].[AccountOwnerAssociation] CHECK CONSTRAINT [FK_AccountOwnerAssociation_Owner_tbl]
GO
